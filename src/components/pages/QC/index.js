import QCIMG from '@/assets/img/quangcao.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function QC() {
    return (
        <div className="quang-cao">
            <div>
                <span className="span-qc">
                    <FontAwesomeIcon icon={faXmark} />
                </span>
                <img src={QCIMG} alt="" />
            </div>
        </div>
    );
}

export default QC;
