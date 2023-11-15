const toggleStlyeTheme = (theme: boolean) => {
	if (theme) {
		document.body.classList.add('bg-myBlack');
		document.body.classList.remove('bg-main');
	} else {
		document.body.classList.add('bg-main');
		document.body.classList.remove('bg-myBlack');
	}
};

export default toggleStlyeTheme;
