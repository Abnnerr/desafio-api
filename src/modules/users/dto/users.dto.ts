export interface CreateUser {
    nome: string;
    documento: string;
    placa: string;
    marca: string;
    modelo: string;
    ano: string;

}
export interface UpdateUser {
    nome: string;
    documento: string;
    placa: string;
    marca: string;
    modelo: string;
    ano: string;

}
export type ResponseType<T = any> = {
    type: "Success" | "Warning";
    message: string;
    data?: T
}
export interface Params {
    id: string
}