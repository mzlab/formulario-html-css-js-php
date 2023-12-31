const select_comuna = document.getElementById('comuna');
const select_region = document.getElementById('region');
const select_candidato = document.getElementById('candidato');

//Carga las regiones en el select correspondiente
fetchAndPopulateSelect('app/region.php', select_region, 'id_re', 'str_descripcion');

//Carga los candidatos en el select correspondiente
fetchAndPopulateSelect('app/candidatos.php', select_candidato, 'id_candidato', 'nombre_completo');

//Carga las comunas en el select correspondiente segun la región seleccionada
select_region.addEventListener('change', function() {
    const select_region_cv = select_region.value;
    fetch('app/comuna.php')
        .then(response => response.json())
        .then(data => {
            select_comuna.innerHTML = '';
            // Recorrer los datos y crear las opciones para el select de comunas
            data.forEach(item => {
                if (select_region_cv == item['id_re']) {
                    const option = document.createElement('option');
                    option.value = item['id_co'];
                    option.text = item['str_descripcion'];
                    select_comuna.appendChild(option);
                }
            });
        })
        .catch(error => console.log(error));
  });


  