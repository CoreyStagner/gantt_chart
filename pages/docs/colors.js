import Head from 'next/head';

export default function Doc_Form() {
  const colorMatrix = [
    {
      header: 'Red',
      values: [
        { variable: '--color-red-50', value: '#ffebee' },
        { variable: '--color-red-100', value: '#ffcdd2' },
        { variable: '--color-red-200', value: '#ef9a9a' },
        { variable: '--color-red-300', value: '#e57373' },
        { variable: '--color-red-400', value: '#ef5350' },
        { variable: '--color-red-500', value: '#f44336' },
        { variable: '--color-red-600', value: '#e53935' },
        { variable: '--color-red-700', value: '#d32f2f' },
        { variable: '--color-red-800', value: '#c62828' },
        { variable: '--color-red-900', value: '#b71c1c' },
        { variable: '--color-red-A100', value: '#ff8a80' },
        { variable: '--color-red-A200', value: '#ff5252' },
        { variable: '--color-red-A400', value: '#ff1744' },
        { variable: '--color-red-A700', value: '#d50000' },
      ],
    },
    {
      header: 'Blue',
      values: [
        { variable: '--color-blue-50', value: '#fce4ec' },
        { variable: '--color-blue-100', value: '#f8bbd0' },
        { variable: '--color-blue-200', value: '#f48fb1' },
        { variable: '--color-blue-300', value: '#f06292' },
        { variable: '--color-blue-400', value: '#ec407a' },
        { variable: '--color-blue-500', value: '#e91e63' },
        { variable: '--color-blue-600', value: '#d81b60' },
        { variable: '--color-blue-700', value: '#c2185b' },
        { variable: '--color-blue-800', value: '#ad1457' },
        { variable: '--color-blue-900', value: '#880e4f' },
        { variable: '--color-blue-A100', value: '#ff80ab' },
        { variable: '--color-blue-A200', value: '#ff4081' },
        { variable: '--color-blue-A400', value: '#f50057' },
        { variable: '--color-blue-A700', value: '#c51162' },
      ],
    },
    {
      header: 'Purple',
      values: [
        { variable: '--color-purple-50', value: '#f3e5f5' },
        { variable: '--color-purple-100', value: '#e1bee7' },
        { variable: '--color-purple-200', value: '#ce93d8' },
        { variable: '--color-purple-300', value: '#ba68c8' },
        { variable: '--color-purple-400', value: '#ab47bc' },
        { variable: '--color-purple-500', value: '#9c27b0' },
        { variable: '--color-purple-600', value: '#8e24aa' },
        { variable: '--color-purple-700', value: '#7b1fa2' },
        { variable: '--color-purple-800', value: '#6a1b9a' },
        { variable: '--color-purple-900', value: '#4a148c' },
        { variable: '--color-purple-A100', value: '#ea80fc' },
        { variable: '--color-purple-A200', value: '#e040fb' },
        { variable: '--color-purple-A400', value: '#d500f9' },
        { variable: '--color-purple-A700', value: '#aa00ff' },
      ],
    },
    {
      header: 'Deep Purple',
      values: [
        { variable: '--color-deeppurple-50', value: '#ede7f6' },
        { variable: '--color-deeppurple-100', value: '#d1c4e9' },
        { variable: '--color-deeppurple-200', value: '#b39ddb' },
        { variable: '--color-deeppurple-300', value: '#9575cd' },
        { variable: '--color-deeppurple-400', value: '#7e57c2' },
        { variable: '--color-deeppurple-500', value: '#673ab7' },
        { variable: '--color-deeppurple-600', value: '#5e35b1' },
        { variable: '--color-deeppurple-700', value: '#512da8' },
        { variable: '--color-deeppurple-800', value: '#4527a0' },
        { variable: '--color-deeppurple-900', value: '#311b92' },
        { variable: '--color-deeppurple-A100', value: '#b388ff' },
        { variable: '--color-deeppurple-A200', value: '#7c4dff' },
        { variable: '--color-deeppurple-A400', value: '#651fff' },
        { variable: '--color-deeppurple-A700', value: '#6200ea' },
      ],
    },
    {
      header: 'Indigo',
      values: [
        { variable: '--color-indigo-50', value: '#e8eaf6' },
        { variable: '--color-indigo-100', value: '#c5cae9' },
        { variable: '--color-indigo-200', value: '#9fa8da' },
        { variable: '--color-indigo-300', value: '#7986cb' },
        { variable: '--color-indigo-400', value: '#5c6bc0' },
        { variable: '--color-indigo-500', value: '#3f51b5' },
        { variable: '--color-indigo-600', value: '#3949ab' },
        { variable: '--color-indigo-700', value: '#303f9f' },
        { variable: '--color-indigo-800', value: '#283593' },
        { variable: '--color-indigo-900', value: '#1a237e' },
        { variable: '--color-indigo-A100', value: '#8c9eff' },
        { variable: '--color-indigo-A200', value: '#536dfe' },
        { variable: '--color-indigo-A400', value: '#3d5afe' },
        { variable: '--color-indigo-A700', value: '#304ffe' },
      ],
    },
    {
      header: 'Pink',
      values: [
        { variable: '--color-pink-50', value: '#e3f2fd' },
        { variable: '--color-pink-100', value: '#bbdefb' },
        { variable: '--color-pink-200', value: '#90caf9' },
        { variable: '--color-pink-300', value: '#64b5f6' },
        { variable: '--color-pink-400', value: '#42a5f5' },
        { variable: '--color-pink-500', value: '#2196f3' },
        { variable: '--color-pink-600', value: '#1e88e5' },
        { variable: '--color-pink-700', value: '#1976d2' },
        { variable: '--color-pink-800', value: '#1565c0' },
        { variable: '--color-pink-900', value: '#0d47a1' },
        { variable: '--color-pink-A100', value: '#82b1ff' },
        { variable: '--color-pink-A200', value: '#448aff' },
        { variable: '--color-pink-A400', value: '#2979ff' },
        { variable: '--color-pink-A700', value: '#2962ff' },
      ],
    },
    {
      header: 'Light Blue',
      values: [
        { variable: '--color-lightblue-50', value: '#e1f5fe' },
        { variable: '--color-lightblue-100', value: '#b3e5fc' },
        { variable: '--color-lightblue-200', value: '#81d4fa' },
        { variable: '--color-lightblue-300', value: '#4fc3f7' },
        { variable: '--color-lightblue-400', value: '#29b6f6' },
        { variable: '--color-lightblue-500', value: '#03a9f4' },
        { variable: '--color-lightblue-600', value: '#039be5' },
        { variable: '--color-lightblue-700', value: '#0288d1' },
        { variable: '--color-lightblue-800', value: '#0277bd' },
        { variable: '--color-lightblue-900', value: '#01579b' },
        { variable: '--color-lightblue-A100', value: '#80d8ff' },
        { variable: '--color-lightblue-A200', value: '#40c4ff' },
        { variable: '--color-lightblue-A400', value: '#00b0ff' },
        { variable: '--color-lightblue-A700', value: '#0091ea' },
      ],
    },
    {
      header: 'Cyan',
      values: [
        { variable: '--color-cyan-50', value: '#e0f7fa' },
        { variable: '--color-cyan-100', value: '#b2ebf2' },
        { variable: '--color-cyan-200', value: '#80deea' },
        { variable: '--color-cyan-300', value: '#4dd0e1' },
        { variable: '--color-cyan-400', value: '#26c6da' },
        { variable: '--color-cyan-500', value: '#00bcd4' },
        { variable: '--color-cyan-600', value: '#00acc1' },
        { variable: '--color-cyan-700', value: '#0097a7' },
        { variable: '--color-cyan-800', value: '#00838f' },
        { variable: '--color-cyan-900', value: '#006064' },
        { variable: '--color-cyan-A100', value: '#84ffff' },
        { variable: '--color-cyan-A200', value: '#18ffff' },
        { variable: '--color-cyan-A400', value: '#00e5ff' },
        { variable: '--color-cyan-A700', value: '#00b8d4' },
      ],
    },
    {
      header: 'Teal',
      values: [
        { variable: '--color-teal-50', value: '#e0f2f1' },
        { variable: '--color-teal-100', value: '#b2dfdb' },
        { variable: '--color-teal-200', value: '#80cbc4' },
        { variable: '--color-teal-300', value: '#4db6ac' },
        { variable: '--color-teal-400', value: '#26a69a' },
        { variable: '--color-teal-500', value: '#009688' },
        { variable: '--color-teal-600', value: '#00897b' },
        { variable: '--color-teal-700', value: '#00796b' },
        { variable: '--color-teal-800', value: '#00695c' },
        { variable: '--color-teal-900', value: '#004d40' },
        { variable: '--color-teal-A100', value: '#a7ffeb' },
        { variable: '--color-teal-A200', value: '#64ffda' },
        { variable: '--color-teal-A400', value: '#1de9b6' },
        { variable: '--color-teal-A700', value: '#00bfa5' },
      ],
    },
    {
      header: 'Green',
      values: [
        { variable: '--color-green-50', value: '#e8f5e9' },
        { variable: '--color-green-100', value: '#c8e6c9' },
        { variable: '--color-green-200', value: '#a5d6a7' },
        { variable: '--color-green-300', value: '#81c784' },
        { variable: '--color-green-400', value: '#66bb6a' },
        { variable: '--color-green-500', value: '#4caf50' },
        { variable: '--color-green-600', value: '#43a047' },
        { variable: '--color-green-700', value: '#388e3c' },
        { variable: '--color-green-800', value: '#2e7d32' },
        { variable: '--color-green-900', value: '#1b5e20' },
        { variable: '--color-green-A100', value: '#b9f6ca' },
        { variable: '--color-green-A200', value: '#69f0ae' },
        { variable: '--color-green-A400', value: '#00e676' },
        { variable: '--color-green-A700', value: '#00c853' },
      ],
    },
    {
      header: 'Light Green',
      values: [
        { variable: '--color-lightgreen-50', value: '#f1f8e9' },
        { variable: '--color-lightgreen-100', value: '#dcedc8' },
        { variable: '--color-lightgreen-200', value: '#c5e1a5' },
        { variable: '--color-lightgreen-300', value: '#aed581' },
        { variable: '--color-lightgreen-400', value: '#9ccc65' },
        { variable: '--color-lightgreen-500', value: '#8bc34a' },
        { variable: '--color-lightgreen-600', value: '#7cb342' },
        { variable: '--color-lightgreen-700', value: '#689f38' },
        { variable: '--color-lightgreen-800', value: '#558b2f' },
        { variable: '--color-lightgreen-900', value: '#33691e' },
        { variable: '--color-lightgreen-A100', value: '#ccff90' },
        { variable: '--color-lightgreen-A200', value: '#b2ff59' },
        { variable: '--color-lightgreen-A400', value: '#76ff03' },
        { variable: '--color-lightgreen-A700', value: '#64dd17' },
      ],
    },
    {
      header: 'Lime',
      values: [
        { variable: '--color-lime-50', value: '#f9fbe7' },
        { variable: '--color-lime-100', value: '#f0f4c3' },
        { variable: '--color-lime-200', value: '#e6ee9c' },
        { variable: '--color-lime-300', value: '#dce775' },
        { variable: '--color-lime-400', value: '#d4e157' },
        { variable: '--color-lime-500', value: '#cddc39' },
        { variable: '--color-lime-600', value: '#c0ca33' },
        { variable: '--color-lime-700', value: '#afb42b' },
        { variable: '--color-lime-800', value: '#9e9d24' },
        { variable: '--color-lime-900', value: '#827717' },
        { variable: '--color-lime-A100', value: '#f4ff81' },
        { variable: '--color-lime-A200', value: '#eeff41' },
        { variable: '--color-lime-A400', value: '#c6ff00' },
        { variable: '--color-lime-A700', value: '#aeea00' },
      ],
    },
    {
      header: 'Yellow',
      values: [
        { variable: '--color-yellow-50', value: '#fffde7' },
        { variable: '--color-yellow-100', value: '#fff9c4' },
        { variable: '--color-yellow-200', value: '#fff59d' },
        { variable: '--color-yellow-300', value: '#fff176' },
        { variable: '--color-yellow-400', value: '#ffee58' },
        { variable: '--color-yellow-500', value: '#ffeb3b' },
        { variable: '--color-yellow-600', value: '#fdd835' },
        { variable: '--color-yellow-700', value: '#fbc02d' },
        { variable: '--color-yellow-800', value: '#f9a825' },
        { variable: '--color-yellow-900', value: '#f57f17' },
        { variable: '--color-yellow-A100', value: '#ffff8d' },
        { variable: '--color-yellow-A200', value: '#ffff00' },
        { variable: '--color-yellow-A400', value: '#ffea00' },
        { variable: '--color-yellow-A700', value: '#ffd600' },
      ],
    },
    {
      header: 'Amber',
      values: [
        { variable: '--color-amber-50', value: '#fff8e1' },
        { variable: '--color-amber-100', value: '#ffecb3' },
        { variable: '--color-amber-200', value: '#ffe082' },
        { variable: '--color-amber-300', value: '#ffd54f' },
        { variable: '--color-amber-400', value: '#ffca28' },
        { variable: '--color-amber-500', value: '#ffc107' },
        { variable: '--color-amber-600', value: '#ffb300' },
        { variable: '--color-amber-700', value: '#ffa000' },
        { variable: '--color-amber-800', value: '#ff8f00' },
        { variable: '--color-amber-900', value: '#ff6f00' },
        { variable: '--color-amber-A100', value: '#ffe57f' },
        { variable: '--color-amber-A200', value: '#ffd740' },
        { variable: '--color-amber-A400', value: '#ffc400' },
        { variable: '--color-amber-A700', value: '#ffab00' },
      ],
    },
    {
      header: 'Orange',
      values: [
        { variable: '--color-orange-50', value: '#fff3e0' },
        { variable: '--color-orange-100', value: '#ffe0b2' },
        { variable: '--color-orange-200', value: '#ffcc80' },
        { variable: '--color-orange-300', value: '#ffb74d' },
        { variable: '--color-orange-400', value: '#ffa726' },
        { variable: '--color-orange-500', value: '#ff9800' },
        { variable: '--color-orange-600', value: '#fb8c00' },
        { variable: '--color-orange-700', value: '#f57c00' },
        { variable: '--color-orange-800', value: '#ef6c00' },
        { variable: '--color-orange-900', value: '#e65100' },
        { variable: '--color-orange-A100', value: '#ffd180' },
        { variable: '--color-orange-A200', value: '#ffab40' },
        { variable: '--color-orange-A400', value: '#ff9100' },
        { variable: '--color-orange-A700', value: '#ff6d00' },
      ],
    },
    {
      header: 'Deep Orange',
      values: [
        { variable: '--color-deeporange-50', value: '#fbe9e7' },
        { variable: '--color-deeporange-100', value: '#ffccbc' },
        { variable: '--color-deeporange-200', value: '#ffab91' },
        { variable: '--color-deeporange-300', value: '#ff8a65' },
        { variable: '--color-deeporange-400', value: '#ff7043' },
        { variable: '--color-deeporange-500', value: '#ff5722' },
        { variable: '--color-deeporange-600', value: '#f4511e' },
        { variable: '--color-deeporange-700', value: '#e64a19' },
        { variable: '--color-deeporange-800', value: '#d84315' },
        { variable: '--color-deeporange-900', value: '#bf360c' },
        { variable: '--color-deeporange-A100', value: '#ff9e80' },
        { variable: '--color-deeporange-A200', value: '#ff6e40' },
        { variable: '--color-deeporange-A400', value: '#ff3d00' },
        { variable: '--color-deeporange-A700', value: '#dd2c00' },
      ],
    },
    {
      header: 'Brown',
      values: [
        { variable: '--color-brown-50', value: '#efebe9' },
        { variable: '--color-brown-100', value: '#d7ccc8' },
        { variable: '--color-brown-200', value: '#bcaaa4' },
        { variable: '--color-brown-300', value: '#a1887f' },
        { variable: '--color-brown-400', value: '#8d6e63' },
        { variable: '--color-brown-500', value: '#795548' },
        { variable: '--color-brown-600', value: '#6d4c41' },
        { variable: '--color-brown-700', value: '#5d4037' },
        { variable: '--color-brown-800', value: '#4e342e' },
        { variable: '--color-brown-900', value: '#3e2723' },
      ],
    },
    {
      header: 'Gray',
      values: [
        { variable: '--color-gray-50', value: '#fafafa' },
        { variable: '--color-gray-100', value: '#f5f5f5' },
        { variable: '--color-gray-200', value: '#eeeeee' },
        { variable: '--color-gray-300', value: '#e0e0e0' },
        { variable: '--color-gray-400', value: '#bdbdbd' },
        { variable: '--color-gray-500', value: '#9e9e9e' },
        { variable: '--color-gray-600', value: '#757575' },
        { variable: '--color-gray-700', value: '#616161' },
        { variable: '--color-gray-800', value: '#424242' },
        { variable: '--color-gray-900', value: '#212121' },
      ],
    },
    {
      header: 'Blue Gray',
      values: [
        { variable: '--color-bluegray-50', value: '#eceff1' },
        { variable: '--color-bluegray-100', value: '#cfd8dc' },
        { variable: '--color-bluegray-200', value: '#b0bec5' },
        { variable: '--color-bluegray-300', value: '#90a4ae' },
        { variable: '--color-bluegray-400', value: '#78909c' },
        { variable: '--color-bluegray-500', value: '#607d8b' },
        { variable: '--color-bluegray-600', value: '#546e7a' },
        { variable: '--color-bluegray-700', value: '#455a64' },
        { variable: '--color-bluegray-800', value: '#37474f' },
        { variable: '--color-bluegray-900', value: '#263238' },
      ],
    },
    {
      header: 'Black and White',
      values: [
        { variable: '--color-black', value: '#000000' },
        { variable: '--color-white', value: '#ffffff' },
      ],
    },
    {
      header: 'Transparent',
      values: [
        { variable: '--color-transparent', value: 'rgba(0, 0, 0, 0)' },
        { variable: '--color-transparent-05', value: 'rgba(0, 0, 0, 0.05)' },
        { variable: '--color-transparent-33', value: 'rgba(0, 0, 0, 0.3)' },
        {
          variable: '--color-red-transparent-3',
          value: 'rgba(255, 0, 0, 0.3)',
        },
      ],
    },
  ];

  /**
   * This function will allow the user to quickly copy the color variable to the clipboard
   *
   * @param {HTMLClickEvent} e The click event for when a swatch is clicked
   * @returns {void}
   */
  const handleColorPick = async (e) => {
    try {
      await navigator.clipboard.writeText(e.target.dataset.color);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div>
      <Head>
        <title>Documentation - Form Elements</title>
      </Head>

      <main>
        <div>
          <h2>Colors</h2>
          <p>Colors ...</p>
          <h3>Swatches</h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}
          >
            {colorMatrix.map((colorGroup) => (
              <div key={colorGroup.header}>
                <h4
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    fontSize: '14px',
                  }}
                >
                  {colorGroup.header}
                </h4>
                {colorGroup.values.map((color) => (
                  <div
                    key={color.variable}
                    onClick={handleColorPick}
                    data-color={`var(${color.variable})`}
                    style={{
                      display: 'flex',
                      flexShrink: 1,
                      height: '100px',
                      width: '100px',
                      backgroundColor: color.value,
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
