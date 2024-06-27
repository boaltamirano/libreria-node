declare module 'transbank-pos-sdk' {
    export class POSIntegrado {
        setDebug(debug: boolean): void;
        autoconnect(): Promise<any>;
        loadKeys(): Promise<void>;
    }
}