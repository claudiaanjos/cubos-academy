const axios = require('axios');
const fs = require('fs/promises');

async function obterEmpresa(req, res) {
    const dominioEmpresa = req.params.dominio;

    const companyEnrichmentResponse = await axios.get(`https://companyenrichment.abstractapi.com/v1/?api_key=1dfd46900b8048b18d92c3dcdbcac626&domain=${dominioEmpresa}`);

    if (companyEnrichmentResponse.data && companyEnrichmentResponse.data.name) {
        const empresasArmazenadas = JSON.parse(await fs.readFile('./dados/empresas.json'));

        empresasArmazenadas.push(companyEnrichmentResponse.data);

        fs.writeFile('./dados/empresas.json', JSON.stringify(empresasArmazenadas, null, 2));
    }

    res.json(companyEnrichmentResponse.data);
}

module.exports = { obterEmpresa }