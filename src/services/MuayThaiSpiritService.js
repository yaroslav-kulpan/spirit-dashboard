export default class MuayThaiSpiritService {
    _baseUrl = 'http://localhost:3000/api';

    getResourse = async (url) => {
        const response = await fetch(`${this._baseUrl}${url}`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url} , resived ${response.status}`)
        }
        return await response.json();
    };


    getAllMessages = async () => {
        return await this.getResourse(`/messages/`);
    };

    deleteMessagesById = async (id) => {
        fetch('', {
            method: 'delete'
        })
    };

    getMessages = async (id) => {
        return await this.getResourse(`/messages/${id}`);
    };
};
