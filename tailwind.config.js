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
				},
			},
		},
		colors: {
			"bharath-blue": "#0073e6",
		},
		plugins: [],
	};