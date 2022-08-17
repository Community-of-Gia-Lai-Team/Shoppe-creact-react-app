class CommonUtils {
    static convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            console.log('check file :', fileReader);

            if (fileReader) {
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.onerror = (error) => {
                    reject(error);
                };
            }
        });
    };
}

export default CommonUtils;
