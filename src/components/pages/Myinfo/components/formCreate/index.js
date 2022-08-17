import { Component } from 'react';
import './form.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import CommonUtils from '@/utils/CommonUtils';
import { createNewProductData } from '@/services/Product';

class FormCreateNewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            star: '',
            sold: '',
            price: '',
            size: '',
            collar: '',
            image: '',
            counters: 10,
            address: '',
            madeIn: '',
            matter: '',
            favirote: '',
            reducerprice: 15,
            avatar: '',
            nameShop: '',
            evaluatePeo: '',
            evaluateShop: '',
            contentMarkDown: '',
            contentHTML: '',
        };
    }

    // Finish!
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkDown: text,
            contentHTML: html,
        });
    };

    handleChangeInput = (e, id) => {
        const cloneState = { ...this.state };

        cloneState[id] = e.target.value;

        this.setState({
            ...cloneState,
        });
    };

    handleChangeFile = async (e, id) => {
        if (id === 'image') {
            const file = e.target.files[0];

            if (file) {
                this.setState({
                    image: file,
                });
            }
        }

        if (id === 'avatar') {
            const file = e.target.files[0];

            if (file) {
                this.setState({
                    avatar: file,
                });
            }
        }
    };

    handleCheck = () => {
        let Validate = true;
        const Arr = [
            'name',
            'star',
            'sold',
            'price',
            'size',
            'collar',
            'image',
            'counters',
            'address',
            'madeIn',
            'matter',
            'favirote',
            'reducerprice',
            'avatar',
            'nameShop',
            'evaluatePeo',
            'evaluateShop',
            'contentMarkDown',
            'contentHTML',
        ];

        for (let i = 0; i < Arr.length; i++) {
            if (!this.state[Arr[i]]) {
                alert('Bạn thiếu trường ' + Arr[i]);
                Validate = false;
                break;
            }
        }

        return Validate;
    };

    handleSubMit = async () => {
        const Check = this.handleCheck();

        if (Check) {
            const cloneState = { ...this.state };

            if (this.state.image && this.state.avatar) {
                cloneState['image'] = await CommonUtils.convertBase64(this.state.image);
                cloneState['avatar'] = await CommonUtils.convertBase64(this.state.avatar);
            }

            const Res = await createNewProductData(cloneState);

            if (Res && Res.errCode === 0) {
                alert('Success createNewProductData');
            }
        }
    };

    render() {
        const mdParser = new MarkdownIt(/* Markdown-it options */);

        return (
            <div className="form-create-new-products">
                <div className="mb-3">
                    <label>Nhập tên sản phẩm</label>
                    <input
                        className="form-control"
                        value={this.state.name}
                        onChange={(e) => this.handleChangeInput(e, 'name')}
                    />
                </div>
                <div className="mb-3">
                    <label>Star</label>
                    <input
                        value={this.state.star}
                        className="form-control"
                        onChange={(e) => this.handleChangeInput(e, 'star')}
                    />
                </div>
                <div className="mb-3">
                    <label>sold</label>
                    <input
                        className="form-control"
                        value={this.state.sold}
                        onChange={(e) => this.handleChangeInput(e, 'sold')}
                    />
                </div>
                <div className="mb-3">
                    <label>price</label>
                    <input
                        className="form-control"
                        value={this.state.price}
                        onChange={(e) => this.handleChangeInput(e, 'price')}
                    />
                </div>
                <div className="mb-3">
                    <label>size</label>
                    <input
                        className="form-control"
                        value={this.state.size}
                        onChange={(e) => this.handleChangeInput(e, 'size')}
                    />
                </div>
                <div className="mb-3">
                    <label>collar</label>
                    <input
                        className="form-control"
                        value={this.state.collar}
                        onChange={(e) => this.handleChangeInput(e, 'collar')}
                    />
                </div>
                <div className="mb-3">
                    <label>image</label>
                    <input className="form-control" type="file" onChange={(e) => this.handleChangeFile(e, 'image')} />
                </div>
                <div className="mb-3">
                    <label>counters</label>
                    <input
                        className="form-control"
                        value={this.state.counters}
                        onChange={(e) => this.handleChangeInput(e, 'counters')}
                    />
                </div>
                <div className="mb-3">
                    <label>address</label>
                    <input
                        className="form-control"
                        value={this.state.address}
                        onChange={(e) => this.handleChangeInput(e, 'address')}
                    />
                </div>
                <div className="mb-3">
                    <label>madeIn</label>
                    <input
                        className="form-control"
                        value={this.state.madeIn}
                        onChange={(e) => this.handleChangeInput(e, 'madeIn')}
                    />
                </div>
                <div className="mb-3">
                    <label>matter</label>
                    <input
                        className="form-control"
                        value={this.state.matter}
                        onChange={(e) => this.handleChangeInput(e, 'matter')}
                    />
                </div>
                <div className="mb-3">
                    <label>favirote</label>
                    <input
                        className="form-control"
                        value={this.state.favirote}
                        onChange={(e) => this.handleChangeInput(e, 'favirote')}
                    />
                </div>
                <div className="mb-3">
                    <label>reducerprice</label>
                    <input
                        className="form-control"
                        value={this.state.reducerprice}
                        onChange={(e) => this.handleChangeInput(e, 'reducerprice')}
                    />
                </div>
                <div className="mb-3">
                    <label>avatar</label>
                    <input className="form-control" type="file" onChange={(e) => this.handleChangeFile(e, 'avatar')} />
                </div>
                <div className="mb-3">
                    <label>nameShop</label>
                    <input
                        className="form-control"
                        value={this.state.nameShop}
                        onChange={(e) => this.handleChangeInput(e, 'nameShop')}
                    />
                </div>
                <div className="mb-3">
                    <label>evaluatePeo</label>
                    <input
                        className="form-control"
                        value={this.state.evaluatePeo}
                        onChange={(e) => this.handleChangeInput(e, 'evaluatePeo')}
                    />
                </div>
                <div className="mb-3">
                    <label>evaluateShop</label>
                    <input
                        className="form-control"
                        value={this.state.evaluateShop}
                        onChange={(e) => this.handleChangeInput(e, 'evaluateShop')}
                    />
                </div>
                <div className="mb-3">
                    <label>Mô tả</label>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                </div>
                <div className="mb-3">
                    <button onClick={this.handleSubMit}>Lưu dữ liệu</button>
                </div>
            </div>
        );
    }
}

export default FormCreateNewProduct;
