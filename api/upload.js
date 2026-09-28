import { handleUpload } from '@vercel/blob/client';

// Issues short-lived tokens so the browser uploads photos/audio/video straight to Vercel Blob
// (bypasses the 4.5 MB function body limit).
export default async function handler(req, res) {
  try {
    const json = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ['image/*', 'audio/*', 'video/*'],
        maximumSizeInBytes: 50 * 1024 * 1024,
        addRandomSuffix: true
      }),
      onUploadCompleted: async () => {}
    });
    res.status(200).json(json);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}
