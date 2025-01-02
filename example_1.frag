// Joao Vitor Rodrigues Github: vitormontana
// Example for WebGL Canvas project

#ifdef GL_ES
precision highp float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float u_time;
uniform vec2 u_resolution;


void main( void ) {
	vec2 uv = (gl_FragCoord.xy - u_resolution * 0.7) / max(u_resolution.x, u_resolution.y) * 3.0;
	uv *= 1.0;
	
	float e = 0.0;
	for (float i=3.0;i<=15.0;i+=1.0) {
		e += 0.007/abs( (i/15.) +sin((u_time/2.0) + 0.15*i*(uv.x) *( cos(i/4.0 + (u_time / 2.0) + uv.x*2.2) ) ) + 2.5*uv.y);
	gl_FragColor = vec4( vec3(e/1.6, e/11.6, e/1.6), 1.0);	

	}
	
}