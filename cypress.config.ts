import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        baseUrl: 'http://localhost:8080'
    },
});
