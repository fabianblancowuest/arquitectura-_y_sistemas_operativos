export const descargarPDF = (url, nombre) => {
	const link = document.createElement("a");
	link.href = url; // URL del archivo PDF
	link.download = nombre; // Nombre del archivo al descargar
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
