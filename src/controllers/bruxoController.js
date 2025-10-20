// Logica, tratativa de erros e regras de negocio.

//importar o Model
import * as bruxoModel from './../models/bruxoModel.js'

export const listarTodosBruxos = async (req, res) => {
    try {
        const bruxos = await bruxoModel.findALL();

        if (!bruxos || bruxos.length === 0) {
            res.status(404).json({
                total: bruxos.length,
                mensagem: 'Nenhum bruxo encontrado.',
                bruxos
            })
            
        }

        res.status(200).json({
            total: bruxos.length,
            mensagem: 'Lista de bruxos',
            bruxos
        });
        
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno no servidor.',
            datalhes: error.message,
            status: 500
        });
    }
}

export const buscarBruxoPorId = async (req,res) => {
    try {
        const { id } = req.params;
        const bruxo = await bruxoModel.findById(id);

        if (!bruxo) {
            return res.status(404).json({
                erro: 'Bruxo não encontrado.',
                mensagem: "Verifique se o ID do bruxo existe.",
                id: id,
            })
        }

        
        res.status(200).json({
        mensagem: "Bruxo encontrado com sucesso.",
        bruxo
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar bruxo por ID.',
            detalhes: error.message,
            status: 500
        })
    }
}