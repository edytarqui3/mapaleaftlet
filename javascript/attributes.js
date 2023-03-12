function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__bd_sist_vida = '<table id="_bd_sist_vida_table">';
tableHTML__bd_sist_vida += 	'<tr>';
tableHTML__bd_sist_vida += 		'<th>Mapa</th>';
tableHTML__bd_sist_vida += 		'<th>CODIGO</th>';
tableHTML__bd_sist_vida += 		'<th>MacroRegio</th>';
tableHTML__bd_sist_vida += 		'<th>_a.prod.mu</th>';
tableHTML__bd_sist_vida += 		'<th>_aProdMun2</th>';
tableHTML__bd_sist_vida += 		'<th>_ccss.mun</th>';
tableHTML__bd_sist_vida += 		'<th>_cod.mun</th>';
tableHTML__bd_sist_vida += 		'<th>_com.mun</th>';
tableHTML__bd_sist_vida += 		'<th>_i.sistVid</th>';
tableHTML__bd_sist_vida += 		'<th>_mun</th>';
tableHTML__bd_sist_vida += 		'<th>_pobRurCs</th>';
tableHTML__bd_sist_vida += 		'<th>_pobl.2012</th>';
tableHTML__bd_sist_vida += 		'<th>_pobl.rura</th>';
tableHTML__bd_sist_vida += 		'<th>_sUpaAgrop</th>';
tableHTML__bd_sist_vida += 		'<th>_supUpaAgr</th>';
tableHTML__bd_sist_vida += 		'<th>_supUpaGan</th>';
tableHTML__bd_sist_vida += 		'<th>_upa.ganad</th>';
tableHTML__bd_sist_vida += 		'<th>_upaAgrope</th>';
tableHTML__bd_sist_vida += 		'<th>_upas.agri</th>';
tableHTML__bd_sist_vida += 		'<th>area_ha</th>';
tableHTML__bd_sist_vida += 		'<th>area_km2</th>';
tableHTML__bd_sist_vida += 		'<th>cat_sec</th>';
tableHTML__bd_sist_vida += 		'<th>cod_mun</th>';
tableHTML__bd_sist_vida += 		'<th>gid_macr</th>';
tableHTML__bd_sist_vida += 		'<th>nom_dept</th>';
tableHTML__bd_sist_vida += 		'<th>nom_mun</th>';
tableHTML__bd_sist_vida += 		'<th>nom_prov</th>';
tableHTML__bd_sist_vida += 	'</tr>';
tableHTML__bd_sist_vida += 	'<tr>';
tableHTML__bd_sist_vida += 		'<td></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar CODIGO"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar MacroRegio"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar _a.prod.mu"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar _aProdMun2"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar _ccss.mun"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar _cod.mun"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar _com.mun"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar _i.sistVid"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar _mun"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar _pobRurCs"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 11)" placeholder="Procurar _pobl.2012"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 12)" placeholder="Procurar _pobl.rura"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 13)" placeholder="Procurar _sUpaAgrop"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 14)" placeholder="Procurar _supUpaAgr"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 15)" placeholder="Procurar _supUpaGan"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 16)" placeholder="Procurar _upa.ganad"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 17)" placeholder="Procurar _upaAgrope"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 18)" placeholder="Procurar _upas.agri"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 19)" placeholder="Procurar area_ha"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 20)" placeholder="Procurar area_km2"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 21)" placeholder="Procurar cat_sec"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 22)" placeholder="Procurar cod_mun"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 23)" placeholder="Procurar gid_macr"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 24)" placeholder="Procurar nom_dept"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 25)" placeholder="Procurar nom_mun"></td>';
tableHTML__bd_sist_vida += 		'<td><input type="text" onkeyup="filter(event, 26)" placeholder="Procurar nom_prov"></td>';
tableHTML__bd_sist_vida += 	'</tr>';

var _bd_sist_vida_IDs = Object.keys(_bd_sist_vida._layers);
for (var i=0; i < _bd_sist_vida_IDs.length; i++){
	var feature = _bd_sist_vida._layers[_bd_sist_vida_IDs[i]].feature;
	tableHTML__bd_sist_vida += '<tr>';
	tableHTML__bd_sist_vida += 	'<td onclick="goToMap(_bd_sist_vida, ' + _bd_sist_vida_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['CODIGO'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['MacroRegio'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_a.prod.mu'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_aProdMun2'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_ccss.mun'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_cod.mun'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_com.mun'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_i.sistVid'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_mun'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_pobRurCs'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_pobl.2012'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_pobl.rura'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_sUpaAgrop'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_supUpaAgr'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_supUpaGan'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_upa.ganad'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_upaAgrope'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['_upas.agri'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['area_ha'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['area_km2'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['cat_sec'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['cod_mun'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['gid_macr'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['nom_dept'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['nom_mun'] + '</td>';
	tableHTML__bd_sist_vida += 	'<td>' + feature.properties['nom_prov'] + '</td>';
	tableHTML__bd_sist_vida += '</tr>';
}

tableHTML__bd_sist_vida += '</table>';
document.getElementById('_bd_sist_vida_tab').innerHTML = tableHTML__bd_sist_vida;

