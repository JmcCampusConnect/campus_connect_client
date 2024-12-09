export default
	{
		content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
		theme:
		{
			extend:
			{
				fontFamily: 
				{
					cambria: [
						'Cambria',
						'Cochin',
						'Georgia',
						'Times',
						'"Times New Roman"',
						'serif',
					],
				},
				fontSize: {
					'2xl': '1.563rem',
					'3xl': '1.953rem',
					'4xl': '2.441rem',
					'5xl': '3.052rem',
					'5xl': '4.052rem',
				},
				colors: {
					"custom-green": "#068932",
						'bharath-blue': '#0073e6',
						'light_rose': '#a855f7',
						'brown': '#b45b2c',
						'light_white':'#f1f5f9',
						'green':'#F72C5B',
						'yellow':'#ffc939',
						'1st':'#099773',
						'2nd':'#43b692',
						'merrown':'#F72C5B',
						'green2':'#00FF9C'
				},
			},
		},
		colors: {
			"bharath-blue": "#0073e6",
		},
		plugins: [],
	};