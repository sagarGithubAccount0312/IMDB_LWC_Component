import { LightningElement } from 'lwc';

export default class ImageUploader extends LightningElement {
    imageUrl;

    handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imageUrl = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
}
