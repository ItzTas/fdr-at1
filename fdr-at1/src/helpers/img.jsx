async function isValidImageURL(imgURL) {
    try {
        const res = await fetch(imgURL, { method: 'HEAD' });
        if (res.status !== 200) {
            return false;
        }
        return res.headers.get('Content-Type')?.startsWith('image/');
    } catch (err) {
        console.error(err);
        return false;
    }
}

export { isValidImageURL };
