// ! mengambil array string dan menggabungkannya menjadi satu string dengan spasi sebagai pemisah. Ini digunakan untuk menggabungkan beberapa nama kelas CSS menjadi satu string.

const cn = (...cns: string[]) => {
	return cns.join(' ');
};

export default cn;
