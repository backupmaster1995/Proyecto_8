import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Form.module.css"
import useSelect from "../hooks/useSelect"
import categories from "../data/categories"

export default function Form({setCategory}) {

    const [category, SelectNews] = useSelect("general",categories)

    const handleSubmit = (e) => {
        e.preventDefault()

        setCategory(category)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <button
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                        >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Form.propTypes = {
    setCategory : PropTypes.func.isRequired
}


