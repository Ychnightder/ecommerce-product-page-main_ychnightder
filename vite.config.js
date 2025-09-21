import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],

	build: {
		outDir: 'dist', // Le dossier de sortie pour la build
		target: 'esnext', // Vous pouvez définir la cible selon vos besoins
	},
	resolve: {
		alias: {
			'@': '/src', // Permet d'utiliser un alias pour accéder à votre dossier 'src'
		},
	},
});