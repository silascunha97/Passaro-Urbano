export interface OfertasInterface {
    id: number,
    categoria: string,
    titulo: string,
    descricao_oferta: string,
    anunciante: string,
    valor: number,
    destaque: boolean,
    imagens: Array<any>
}