import { AnimeData } from "../../type";
import Button from "../style/Button";

type Props = {
    setTopAnimePage: React.Dispatch<React.SetStateAction<number>>;
    topAnimePage: number;
    topAnimeData: {
        data: AnimeData[];
        pagination: Pagination;
    }
}
const TopAnimePageNumbers = ({ topAnimePage, topAnimeData, setTopAnimePage }: Props) => {
    if (topAnimeData && topAnimeData.pagination && typeof topAnimeData.pagination.last_visible_page !== 'undefined') {
        // ! startPage akan menjadi 1 jika topAnimePage - 1 atau topAnimePage kurang dari 1 dan memunculkan 2 nomor sebelum currentPage
        const startPage = Math.max(1, +topAnimePage - 2);

        // ! mastiin kalo endPage gapernah lebih besar dari last_visible_page dan memunculkan 2 nomor setelah currentPage
        const endPage = Math.min(topAnimeData.pagination.last_visible_page, +topAnimePage + 1);

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
        if (endPage < topAnimeData.pagination.last_visible_page) {
            pageNumbers.push('..');
            pageNumbers.push(topAnimeData.pagination.last_visible_page);
        }

        return pageNumbers.map((number, index) => {
            const bg = number === topAnimePage ? 'pr' : 'sc'
            const opacity = number === topAnimePage && 'opacity-70'
            return (
                <Button
                    key={index}
                    onClick={() => number !== '..' && setTopAnimePage(+number)}
                    color={`${bg}`}
                    className={`${opacity}`}
                >
                    {number}
                </Button>
            );
        });
    }
}

export default TopAnimePageNumbers