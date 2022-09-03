class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bz1rcyrp");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/icanmart/image/upload", //
      {
        method: "POST",
        body: formData,
      },
    );

    return await res.json();
  }
}

export default ImageUploader;
