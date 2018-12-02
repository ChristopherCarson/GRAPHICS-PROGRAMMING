precision mediump float;

uniform vec3 uLightPosition;
uniform vec3 uCameraPosition;
uniform sampler2D uTexture;

varying vec2 vTexcoords;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

const vec3 lightColor = vec3(1.0, 1.0, 1.0);
const vec3 specColor = vec3(0.3, 0.3, 0.3);

void main(void) {
    vec3 normalLightPosition = normalize(uLightPosition - vWorldPosition);
    vec3 normalWorldNormal = normalize(vWorldNormal);
    highp float lambertTerm = max(dot(normalLightPosition, normalWorldNormal), 0.0);

    // Calculate the eye vector
    vec3 eyeVector =  uCameraPosition - vWorldPosition;
    vec3 normalEyeVector = normalize(eyeVector);

    // Calculate the reflection vector
    vec3 reflection = 2.0 * dot(normalWorldNormal, normalLightPosition) * normalWorldNormal - normalLightPosition;

    // Calculate Phong Term
    float specularTerm = pow( max(dot(reflection, normalEyeVector), 0.0), 64.0);

    vec3 albedo = texture2D(uTexture, vTexcoords).rgb;

    vec3 ambient = albedo * 0.1;
    vec3 diffuseColor = lightColor * lambertTerm * albedo;
    vec3 specularColor = specColor * specularTerm;
    vec3 finalColor = ambient + diffuseColor + specularColor;

    gl_FragColor = vec4(finalColor,  1.0);
}

