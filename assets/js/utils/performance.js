function getWebGLInfo() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        return { vendor, renderer };
    }
    return null;
}

function measureGPUPerformance() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        return 999; // WebGL not supported
    }

    const vertexShaderSource = `
        attribute vec4 a_position;
        void main() {
            gl_Position = a_position;
        }
    `;
    const fragmentShaderSource = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program,fragmentShader);
    gl.linkProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1,
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    const start = performance.now();

    for (let i = 0; i < 100; i++) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    const end = performance.now();
    return end - start;
}

function getPerformance(){

	const webGLInfo = getWebGLInfo();
	const gpuPerformance = measureGPUPerformance();
	const deviceMemory = navigator.deviceMemory || 0.5;


	const screenArea = window.innerWidth * window.innerHeight;

	const performancePerPixel = (gpuPerformance / screenArea) * 100000;

	let p = {
		gl:webGLInfo,
		gpu: gpuPerformance,
		gpuPerPixel: performancePerPixel,
		deviceMemory : deviceMemory
	}

	let isLow = (!p.gl || p.gpuPerPixel > 0.1 || p.deviceMemory < 0.5)

	p.isLow = isLow;
	return p;

}

function isLowPerformance(){

	let p = getPerformance();
	return p.isLow;

}

export {getPerformance,isLowPerformance}