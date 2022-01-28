<template>
  <q-page class="row justify-evenly q-mt-xl" v-cloak @drop.prevent="uploadFile" @dragover.prevent>
    <h5 v-if="files.length === 0">Upload files by drag-and-drop</h5>
    <div class="fileContainer">
      <div class="file" v-for="file in files" :key="file._id" @click="openFile(file._id, file.fileIcon)">
        <q-icon size="64px" :name="file.fileIcon"/>
        <p>{{file.originalName}}</p>
      </div>
    </div>
    <q-dialog v-model="show">
      <q-card>
        <q-card-section>
          <div class="row justify-end">
            <q-btn icon="close" flat round dense v-close-popup />
          </div>
          <pre style="margin-top: -1.5em" v-if="fileType === 'description'">{{currentFile}}</pre>
          <img class="media" :src="currentFile" v-if="fileType === 'image'"/>
          <video class="media" :src="currentFile" autoplay v-if="fileType === 'video_file'"/>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-uploader
      url="/files/upload"
      label="Uploader"
      class="uploader"
      multiple
      hide-upload-btn
      auto-upload
      flat
      field-name="file"
      ref="uploader"
      @uploaded="removeUploaded"
      @failed="notifyFailed"
      :headers="[{name: 'authorization', value: `Bearer ${token}`}]"
      style="min-width: 300px; max-width: 450px; width: 100%;" />
  </q-page>
</template>

<script lang="ts">
import { QUploader } from 'quasar';
import { defineComponent, ref } from 'vue';
import { api } from './../boot/axios';

interface failedUploadResponse {
  files: [File],
  xhr: XMLHttpRequest
}

export default defineComponent({
  name: 'Dashboard',
  data: () => {
    return {
      uploader: ref(QUploader),
      files: [],
      currentFile: {},
      fileType: '',
      show: false
    }
  },
  mounted: async function () {
    await this.refreshFiles();
  },
  methods: {
    uploadFile(e: DragEvent) {
      const files = e.dataTransfer?.files;
      if (!files) return;
      (<QUploader>this.$refs.uploader).addFiles(files);
    },
    async removeUploaded() {
      (<QUploader>this.$refs.uploader).removeUploadedFiles();
      await this.refreshFiles();
    },
    notifyFailed(info: failedUploadResponse) {
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: info.xhr.response
      });
    },
    refreshFiles: async function() {
      const files = await api.get('/files');
      if (!files) return;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.files = files.data;
    },
    openFile: async function(id: string, type: string) {
      if (type !== 'description') {
        this.currentFile = `/files/${id}`;
      }
      if (type === 'description') {
        const file = await api.get(`/files/${id}`);
        if (!file) return;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.currentFile = file.data;
      }
      this.fileType = type;
      this.show = true;
    }
  },
  computed: {
    token() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const token = <boolean>this.$store.getters.getToken;
      return token;
    }
  }
});
</script>
