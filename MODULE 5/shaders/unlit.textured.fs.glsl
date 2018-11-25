precision mediump float;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform float uTime;

varying vec2 vTexcoords;

void main(void) {

	vec2 new = vec2(vTexcoords.x + uTime, vTexcoords.y);
	vec4 color = texture2D(uTexture, new);
	color.a = uAlpha;
	gl_FragColor = color;

}

