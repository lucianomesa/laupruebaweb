function statusFinal(nombre, apellido, departamento, puntajeFundamentos, puntajeImperativa, puntajeObjetos, evidenciaFundamentos, evidenciaImperativa, evidenciaObjetos, promedioIngles, leccionesTransversales) {
    let status = "reprobado";
    let puntajeTecnico = 0.3 * puntajeFundamentos + 0.5 * puntajeImperativa + 0.2 * puntajeObjetos;
    let evidencias = 0;
    let puntajeTransversales = leccionesTransversales * 10

    if (evidenciaFundamentos) evidencias++;
    if (evidenciaImperativa) evidencias++;
    if (evidenciaObjetos) evidencias++; 

    if (promedioIngles >= 50 && leccionesTransversales == 10) {
        if (puntajeTecnico >= 60 && evidencias == 3) {
            status = "aprobado!!";
        } else if (puntajeTecnico >= 60 && evidencias < 3) {
            status = "debes rendir un examen final con supervisión y obtener 60% o más para aprobar.";
        } else if (puntajeTecnico >= 50 && puntajeTecnico < 60 && evidencias == 3) {
            status = "puedes rendir un examen final con supervisión y obtener 60% o más para aprobar.";
        }
    }

    let mensaje = "Hola " + nombre + "!!, el detalle de tu status final es:                                               "+"En Inglés: " + promedioIngles +" puntos.                                                  "+"En CT: " + puntajeTransversales + "puntos.                                                      "+"Evidencias entregadas: " + evidencias +".                                               "+"En conclusión, tu status final es: " + status + "                                                Con un puntaje tecnico de: " + puntajeTecnico;

    return mensaje;
}
