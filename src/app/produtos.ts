export interface IProduto{
    id:number;
    descricao: string;
    preco: number;
    descricaoPreco :string;
    quantidadeEstoque:number;
    imagem: string;

}
export interface IProdutoCarrinho extends IProduto{
   quantidade:number;
    
}
export const produtos: IProduto[] = [
    {id: 1,descricao:"Mouse gamer",preco:439.00,descricaoPreco: "á vista no Pix", imagem:"./assets/mouse-3.jpg",quantidadeEstoque:10},
    {id: 2,descricao:"Monitor muito bom",preco:1200.50,descricaoPreco: "á vista no Pix" ,imagem:"./assets/monitor-1.jpg",quantidadeEstoque:10},
    {id: 3,descricao:"Teclado excelente",preco:749.99,descricaoPreco: "á vista no Pix", imagem:"./assets/teclado-1.jpg", quantidadeEstoque:10},
    {id: 4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco: "á vista no Pix", imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},
    {id: 5,descricao:"Fone de Ouvido",preco:299.99 ,descricaoPreco: "á vista no Pix", imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:10},
    {id: 6,descricao:"Fone de Ouvido bom",preco:399.99,descricaoPreco: "á vista no Pix", imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},
    {id: 7,descricao:"HD 1TB ",preco:499.99,descricaoPreco: "á vista no Pix", imagem:"./assets/hd.jpg",quantidadeEstoque:10},
    {id: 8,descricao:"Combo de placa e video",preco:18449.99,descricaoPreco: "á vista no Pix", imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},
    {id: 9,descricao:"Processador Ryzen",preco:1000.00,descricaoPreco: "á vista no Pix", imagem:"./assets/processador.jpg",quantidadeEstoque:10},
    {id: 10,descricao:"Notebook bom",preco:2500.00,descricaoPreco: "á vista no Pix", imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},
    {id: 11,descricao:"Mouse barato",preco:20.00,descricaoPreco: "á vista no Pix", imagem:"./assets/mouse-1.jpg",quantidadeEstoque:10},
    {id: 12,descricao:"Mouse Otimo",preco:200.00,descricaoPreco: "á vista no Pix", imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},
    {id: 13,descricao:"Mouse pequeno",preco:50.00,descricaoPreco: "á vista no Pix", imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},
    {id: 14,descricao:"Teclado bom",preco:159.99,descricaoPreco: "á vista no Pix", imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10},
    {id: 15,descricao:"Notebook Excelente",preco:4500.00,descricaoPreco: "á vista no Pix", imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10}
    
]

