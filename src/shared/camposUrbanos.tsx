import React, { useEffect, useState } from 'react'
import {
    Col,
    FormGroup,
    FormLabel,
    FormControl,
    FormCheck,
    Row
} from 'react-bootstrap'
import Select from 'react-select'

interface CamposUrbanosProps {
    formData: any
    handleFieldChange: (e: any, location: string) => void
    formDataField: string
}

const opcionesVia = [
    { value: 'CL', label: 'Calle' },
    { value: 'CR', label: 'Carrera' },
    { value: 'AU', label: 'Autopista' },
    { value: 'AV', label: 'Avenida' },
    { value: 'AC', label: 'Avenida calle' },
    { value: 'AK', label: 'Avenida carrera' },
    { value: 'BL', label: 'Bulevar' },
    { value: 'CT', label: 'Carretera' },
    { value: 'CQ', label: 'Circular' },
    { value: 'CV', label: 'Circunvalar' },
    { value: 'CC', label: 'Cuentas corridas' },
    { value: 'DG', label: 'Diagonal' },
    { value: 'PJ', label: 'Pasaje' },
    { value: 'PS', label: 'Paseo' },
    { value: 'PT', label: 'Peatonal' },
    { value: 'TV', label: 'Transversal' },
    { value: 'TC', label: 'Troncal' },
    { value: 'VT', label: 'Variante' },
    { value: 'VI', label: 'Vía' }
]

const opcionesCardinalidad = [
    { value: 'Norte', label: 'Norte' },
    { value: 'Sur', label: 'Sur' },
    { value: 'Este', label: 'Este' },
    { value: 'Oeste', label: 'Oeste' }
]

const CamposUrbanos: React.FC<CamposUrbanosProps> = ({
    formData,
    handleFieldChange,
    formDataField
}) => {
    const [resumenDireccion, setResumenDireccion] = useState('')

    useEffect(() => {
        const fields = [
            formData.viaPrincipal,
            formData.numeroViaPrincipal,
            formData.letraPrincipal,
            formData.esBis ? 'Bis' : '',
            formData.cuadrantePrincipal,
            formData.numeroViaSecundaria ? `# ${formData.numeroViaSecundaria}` : '',
            formData.letraSecundaria,
            formData.cuadranteSecundario,
            formData.numeroPlaca ? `- ${formData.numeroPlaca}` : '',
            ' ',
            formData.complemento
        ]

        const resumen = fields.filter(field => field).join(' ')
        setResumenDireccion(resumen)
    }, [formData])

    // Utilidad para encontrar opción por valor
    const getOption = (options: any[], value: string) => {
        return options.find(opt => opt.value === value) || null
    }

    return (
        <Row>
            <Col md={3} xs={12}>
                <FormGroup>
                    <FormLabel>Vía principal</FormLabel>
                    <Select
                        name='viaPrincipal'
                        options={opcionesVia}
                        value={getOption(opcionesVia, formData?.viaPrincipal)}
                        onChange={selectedOption => {
                            handleFieldChange(
                                {
                                    target: { name: 'viaPrincipal', value: selectedOption?.value }
                                },
                                formDataField
                            )
                        }}
                        placeholder='Selecciona...'
                        isClearable
                    />
                </FormGroup>
            </Col>

            <Col md={2}>
                <FormGroup className='mb-3'>
                    <FormLabel>Número vía</FormLabel>
                    <FormControl
                        type='text'
                        name='numeroViaPrincipal'
                        value={formData?.numeroViaPrincipal || ''}
                        onChange={e => handleFieldChange(e, formDataField)}
                        placeholder='Ej: 23'
                    />
                </FormGroup>
            </Col>

            <Col md={2}>
                <FormGroup>
                    <FormLabel>Letra</FormLabel>
                    <FormControl
                        type='text'
                        name='letraPrincipal'
                        value={formData?.letraPrincipal || ''}
                        onChange={e => handleFieldChange(e, formDataField)}
                        placeholder='Ej: A'
                    />
                </FormGroup>
            </Col>

            <Col md={2} className='align-self-end'>
                <FormGroup className='mb-4'>
                    <FormCheck
                        type='checkbox'
                        label='¿Es bis?'
                        name='esBis'
                        onChange={e => handleFieldChange(e, formDataField)}
                        checked={formData?.esBis || false}
                    />
                </FormGroup>
            </Col>

            <Col md={3}>
                <FormGroup className='mb-3'>
                    <FormLabel>Cardinalidad</FormLabel>
                    <Select
                        name='cuadrantePrincipal'
                        options={opcionesCardinalidad}
                        value={getOption(
                            opcionesCardinalidad,
                            formData?.cuadrantePrincipal
                        )}
                        onChange={selectedOption => {
                            handleFieldChange(
                                {
                                    target: {
                                        name: 'cuadrantePrincipal',
                                        value: selectedOption?.value
                                    }
                                },
                                formDataField
                            )
                        }}
                        placeholder='Selecciona...'
                        isClearable
                    />
                </FormGroup>
            </Col>

            <Row style={{ justifyContent: 'space-between' }}>
                <Col className='col-md-auto text-center align-self-center'>
                    <div className='mt-3 p-1'>
                        <b>#</b>
                    </div>
                </Col>

                <Col md={2}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Número uno</FormLabel>
                        <FormControl
                            type='text'
                            value={formData?.numeroViaSecundaria || ''}
                            onChange={e => handleFieldChange(e, formDataField)}
                            placeholder='Ej: 13'
                            name='numeroViaSecundaria'
                        />
                    </FormGroup>
                </Col>

                <Col md={2}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Letra</FormLabel>
                        <FormControl
                            type='text'
                            value={formData?.letraSecundaria || ''}
                            onChange={e => handleFieldChange(e, formDataField)}
                            name='letraSecundaria'
                            placeholder='Ej: C'
                        />
                    </FormGroup>
                </Col>

                <Col md={2}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Cardinalidad </FormLabel>
                        <Select
                            name='cuadranteSecundario'
                            options={opcionesCardinalidad}
                            value={getOption(
                                opcionesCardinalidad,
                                formData?.cuadranteSecundario
                            )}
                            onChange={selectedOption => {
                                handleFieldChange(
                                    {
                                        target: {
                                            name: 'cuadranteSecundario',
                                            value: selectedOption?.value
                                        }
                                    },
                                    formDataField
                                )
                            }}
                            placeholder='Selecciona...'
                            isClearable
                        />
                    </FormGroup>
                </Col>

                <Col className='col-md-auto text-center align-self-center'>
                    <div className='mt-3 p-1'>
                        <b>-</b>
                    </div>
                </Col>

                <Col md={2}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Número dos</FormLabel>
                        <FormControl
                            type='text'
                            name='numeroPlaca'
                            value={formData?.numeroPlaca || ''}
                            onChange={e => handleFieldChange(e, formDataField)}
                            placeholder='Ej: 25'
                        />
                    </FormGroup>
                </Col>

                <Col md={2} style={{ paddingRight: '7px' }}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Complemento</FormLabel>
                        <FormControl
                            type='text'
                            name='complemento'
                            value={formData?.complemento || ''}
                            onChange={e => handleFieldChange(e, formDataField)}
                            placeholder='Ej: Casa 3'
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Col md={4}>
                <FormGroup className='mb-3'>
                    <FormLabel>Barrio / Sector</FormLabel>
                    <FormControl
                        type='text'
                        value={formData?.nombreBarrio || ''}
                        onChange={e => handleFieldChange(e, formDataField)}
                        name='nombreBarrio'
                        placeholder='Ej: Mi barrio'
                    />
                </FormGroup>
            </Col>

            <Col md={8}>
                <FormGroup className='mb-2'>
                    <FormLabel>Resumen de dirección </FormLabel>
                    <FormControl
                        type='text'
                        className='bg-body-secondary'
                        value={resumenDireccion}
                        disabled
                    />
                </FormGroup>
            </Col>

            <Col md={12}>
                <FormGroup className='mb-2'>
                    <FormLabel>Indicaciones de ubicación</FormLabel>
                    <FormControl
                        type='text'
                        value={formData?.indicaciones || ''}
                        onChange={e => handleFieldChange(e, formDataField)}
                        name='indicaciones'
                    />
                </FormGroup>
            </Col>
        </Row>
    )
}

export default CamposUrbanos
