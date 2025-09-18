import React, { useState, useRef, useEffect } from 'react'
import { Form, Table, Button } from 'react-bootstrap'
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import { Subtitulo } from 'react-ecosistema-unp/ui'

interface SeccionDesplegableProps {
    titulo: string
    icono: React.ElementType | any
    datos: { label: string; value: string | number | boolean }[]
}

const SeccionDesplegable: React.FC<SeccionDesplegableProps> = ({
    titulo,
    icono,
    datos,
}) => {
    const [expanded, setExpanded] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState('0px')

    const toggleExpansion = () => {
        setExpanded(prev => !prev)
    }

    useEffect(() => {
        if (contentRef.current) {
            setHeight(expanded ? `${contentRef.current.scrollHeight}px` : '0px')
        }
    }, [expanded])

    return (
        <div className='item_container_datos '  >
            <div onClick={toggleExpansion} className='tittle-container-modal' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Subtitulo subtitle={titulo} icon={icono} />
                <Button variant='link'>
                    {expanded ? (
                        <IoIosArrowDropdownCircle className='boton-desplegable' />
                    ) : (
                        <IoIosArrowDroprightCircle className='boton-desplegable' />
                    )}
                </Button>
            </div>

            <div
                ref={contentRef}
                style={{
                    maxHeight: height,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                    opacity: expanded ? 1 : 0,
                }}
            >
                <Form className='text-start py-3'>
                    <Table striped responsive>
                        <tbody>
                            {datos.map((item, index) => (
                                <tr key={index}>
                                    <th className='text-start'>{item.label}</th>
                                    <td className='text-start'>{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Form>
            </div>
        </div>
    )
}

export default SeccionDesplegable





