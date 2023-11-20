import Button from "../style/Button";

type Props = {
    setTopMangaPage: React.Dispatch<React.SetStateAction<number>>;
    topMangaPage: number;
    topMangaData: {
        data: MangaData[];
        pagination: Pagination;
    }
}
const TopMangaPageNumbers = ({ topMangaPage, topMangaData, setTopMangaPage }: Props) => {
    if (topMangaData && topMangaData.pagination && typeof topMangaData.pagination.last_visible_page !== 'undefined') {
        // ! startPage akan menjadi 1 jika topMangaPage - 1 atau topMangaPage kurang dari 1 dan memunculkan 2 nomor sebelum currentPage
        const startPage = Math.max(1, +topMangaPage - 2);

        // ! mastiin kalo endPage gapernah lebih besar dari last_visible_page dan memunculkan 2 nomor setelah currentPage
        const endPage = Math.min(topMangaData.pagination.last_visible_page, +topMangaPage + 1);

        const pageNumbers = [];
        // ! semua nomor akan di store di pageNumbers, gaboleh lebih dari endpage
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        //! Jika startPage lebih besar dari 1, maka ... dan angka 1 ditambahkan ke awal array pageNumbers dan string ... 
        if (startPage > 1) {
            pageNumbers.unshift('..');
            pageNumbers.unshift(1);
        }

        // ! kalo end page nya itu lebih kecil dari last_visible_page  maka nge push ... dan memunculkan last_visible_page
        if (endPage < topMangaData.pagination.last_visible_page) {
            pageNumbers.push('..');
            pageNumbers.push(topMangaData.pagination.last_visible_page);
        }

        return pageNumbers.map((number, index) => {
            const bg = number === topMangaPage ? 'pr' : 'sc'
            const opacity = number === topMangaPage && 'opacity-70'
            return (
                <Button
                    key={index}
                    onClick={() => number !== '..' && setTopMangaPage(+number)}
                    color={`${bg}`}
                    className={`${opacity}`}
                >
                    {number}
                </Button>
            );
        });
    }
}

export default TopMangaPageNumbers