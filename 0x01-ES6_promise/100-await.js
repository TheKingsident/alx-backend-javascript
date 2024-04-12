import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = uploadPhoto();
    const user = createUser();
    const [photoResponse, userResponse] = await Promise.all([photo, user]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}
