// funcion para validar si es movil
export function isMobile(ua) {
	// si detecta la palabra movil en la cadena del ua regresara true
  return /mobile/i.test(ua);
}
