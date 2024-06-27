const { POSIntegrado } = require('transbank-pos-sdk');

class TransbankPos {
    private pos: any;

    constructor() {
        this.pos = new POSIntegrado();
    }

    public setDebug(debug: boolean): void {
        this.pos.setDebug(debug);
    }

    public async autoConnect(): Promise<void> {
        try {
            const port = await this.pos.autoconnect();
            if (port === false) {
                console.log('No se encontró ningún POS conectado');
                return;
            }
            console.log('Connected to PORT: ', port.path);
            await this.pos.loadKeys();
        } catch (err) {
            console.log('Ocurrió un error inesperado', err);
        }
    }
}

export = TransbankPos;
