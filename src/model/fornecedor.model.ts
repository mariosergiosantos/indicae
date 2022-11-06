export class Fornecedor {
    constructor(
        public nome: string,
        public email: string,
        public telefone?: string,
        public enderero?: string,
        public complemento?: string
    ) { }
}