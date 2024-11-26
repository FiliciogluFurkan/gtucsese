import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Modal } from '@mui/material';

function FootballCourtManagement() {
    interface FootballCourtFields {
        field: {
            id: number;
            name: string;
            image: string;
            people: number;
            width: number;
            height: number;
            price: number;
            status: boolean;
        };
    }

    const [fields, setFields] = useState<FootballCourtFields[]>([]);

    // Düzenleme durumu her saha için ayrı ayrı olacak
    const [editingFields, setEditingFields] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const dummyField = {
            field: {
                id: 1,
                name: 'saha1',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkOREMt9spAiPAXEimAysKFe580eAkTSTTA&s',
                people: 14,
                width: 30,
                height: 50,
                price: 150,
                status: true,
            },
        };

        // 7 sahalık dummy veri oluşturuyoruz
        setFields([dummyField, dummyField, dummyField, dummyField, dummyField, dummyField, dummyField]);
    }, []);

    const handleEdit = (fieldId: number) => {
        console.log(fieldId);
        setEditingFields((prev) => ({ ...prev, [fieldId]: true }));
    };

    const handleSave = (fieldId: number) => {

        const updatedFields = fields.map((field) =>
            field.field.id === fieldId
                ? { ...field }
                : field
        );
        console.log(updatedFields);
        setFields(updatedFields);
        setEditingFields((prev) => ({ ...prev, [fieldId]: false }));
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldKey: keyof FootballCourtFields['field'], index: number) => {
        const newFields = fields.map((f, i) =>
            i === index ? { field: { ...f.field, [fieldKey]: e.target.value } } : f
        );
        console.log(index);
        setFields(newFields);
    };

    const toggleStatus = (index: number) => {

        const newFields = fields.map((f, i) =>
            i === index ? { field: { ...f.field, status: !f.field.status } } : f
        );
        setFields(newFields);
    };

    const [open, setOpen] = useState(false);


    const [newField, setNewField] = useState({
        id: 0,
        name: '',
        image: '',
        people: 0,
        width: 0,
        height: 0,
        price: 0,
        status: true,
    });

    // Modal açma/kapatma fonksiyonları
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave2 = () => {

        fields.push({ field: newField });
        console.log('Yeni Saha Eklendi:', newField);
       

        handleClose();
    };

    
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldKey: keyof typeof newField) => {
        setNewField({ ...newField, [fieldKey]: e.target.value });
    };


    return (
        <Box
            sx={{
                width: '75vw',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                margin: 'auto',
                padding: '20px',
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'flex-start',
                }}
            >
                {fields.map((field, index) => (
                    <Box
                        key={field.field.id}
                        sx={{
                            width: '30%',
                            backgroundColor: '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                padding: '1rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid #ddd',
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 500,
                                    fontFamily: 'Roboto, sans-serif',
                                }}
                            >
                                {field.field.name}
                            </Box>
                            {editingFields[index] ? (

                                <Box
                                    onClick={() => toggleStatus(index)}
                                    sx={{
                                        padding: '0.3rem 0.8rem',
                                        backgroundColor: field.field.status ? '#8bc34a' : '#e57373',
                                        color: '#fff',
                                        borderRadius: '15px',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: '#e57373',
                                        },
                                    }}
                                >
                                    {field.field.status ? 'Aktif' : 'Pasif'}
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        padding: '0.3rem 0.8rem',
                                        backgroundColor: field.field.status ? '#8bc34a' : '#e57373',
                                        color: '#fff',
                                        borderRadius: '15px',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',

                                    }}
                                >
                                    {field.field.status ? 'Aktif' : 'Pasif'}
                                </Box>
                            )}

                        </Box>

                        <Box sx={{ padding: '1rem' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <Box sx={{ color: 'green' }}>
                                    <span className="material-symbols-outlined">group</span>
                                </Box>
                                <Box sx={{ paddingLeft: '1rem' }}>
                                    {editingFields[index] ? (

                                        <TextField
                                            type="number"
                                            variant="outlined"
                                            size="small"
                                            value={field.field.people}
                                            onChange={(e) => handleChange(e, 'people', index)}
                                            sx={{ width: '100px' }}
                                        />
                                    ) : (
                                        `Kişi sayısı: ${field.field.people}`
                                    )}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <Box sx={{ color: 'green' }}>
                                    <span className="material-symbols-outlined">crop_free</span>
                                </Box>
                                <Box sx={{ paddingLeft: '1rem' }}>
                                    {editingFields[index] ? (
                                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                                            <TextField
                                                type="number"
                                                value={field.field.width}
                                                onChange={(e) =>
                                                    handleChange(e, 'width', index)
                                                }
                                                size="small"
                                                sx={{ width: '70px' }}
                                            />
                                            <TextField
                                                type="number"
                                                value={field.field.height}
                                                onChange={(e) =>
                                                    handleChange(e, 'height', index)
                                                }
                                                size="small"
                                                sx={{ width: '70px' }}
                                            />
                                        </Box>
                                    ) : (
                                        `Saha Boyutu: ${field.field.width} x ${field.field.height}`
                                    )}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <Box sx={{ color: 'green' }}>
                                    <span className="material-symbols-outlined">currency_lira</span>
                                </Box>
                                <Box sx={{ paddingLeft: '1rem' }}>
                                    {editingFields[index] ? (
                                        <TextField
                                            type="number"
                                            value={field.field.price}
                                            onChange={(e) =>
                                                handleChange(e, 'price', index)
                                            }
                                            size="small"
                                            sx={{ width: '100px' }}
                                        />
                                    ) : (
                                        `Saatlik: ${field.field.price} TL`
                                    )}
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                textAlign: 'center',
                                padding: '0.5rem',
                                backgroundColor: '#f5f5f5',
                                borderTop: '1px solid #ddd',
                            }}
                        >
                            {editingFields[index] ? (
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'green',
                                        color: 'green',
                                        width: '150px',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            borderColor: '#388e3c',
                                            backgroundColor: '#388e3c',
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleSave(index)}
                                >
                                    Kaydet
                                </Button>
                            ) : (
                                <Button
                                    variant="outlined"
                                    sx={{
                                        width: '150px',
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        borderColor: 'green',
                                        color: 'green',
                                        '&:hover': {
                                            borderColor: '#388e3c',
                                            backgroundColor: '#388e3c',
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleEdit(index)}
                                >
                                    Düzenle
                                </Button>
                            )}
                        </Box>
                    </Box>
                ))}
                <Box sx={{ textAlign: 'center', padding: '2rem' }}>
                    {/* "Saha Ekle" kutusu */}
                    <Box
                        sx={{
                            width: '300px',
                            height: '150px',
                            margin: '0 auto',
                            backgroundColor: '#f5f5f5',
                            border: '2px dashed #ccc',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#e0e0e0',
                            },
                        }}
                        onClick={handleOpen}
                    >
                        <Box sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#777' }}>+</Box>
                        <Box sx={{ fontSize: '1.2rem', color: '#777' }}>Saha Ekle</Box>
                    </Box>

                    {/* Modal */}
                    <Modal open={open} onClose={handleClose}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '400px',
                                backgroundColor: 'white',
                                border: '2px solid #ccc',
                                borderRadius: '10px',
                                boxShadow: 24,
                                p: 4,
                            }}
                        >
                            <h2>Saha Bilgilerini Girin</h2>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <TextField
                                    label="Saha Adı"
                                    value={newField.name}
                                    onChange={(e) => handleChange2(e, 'name')}
                                    fullWidth
                                />
                             
                                <TextField
                                    label="Kişi Sayısı"
                                    type="number"
                                    value={newField.people}
                                    onChange={(e) => handleChange2(e, 'people')}
                                    fullWidth
                                />
                                <TextField
                                    label="Genişlik (m)"
                                    type="number"
                                    value={newField.width}
                                    onChange={(e) => handleChange2(e, 'width')}
                                    fullWidth
                                />
                                <TextField
                                    label="Yükseklik (m)"
                                    type="number"
                                    value={newField.height}
                                    onChange={(e) => handleChange2(e, 'height')}
                                    fullWidth
                                />
                                <TextField
                                    label="Saatlik Ücret (₺)"
                                    type="number"
                                    value={newField.price}
                                    onChange={(e) => handleChange2(e, 'price')}
                                    fullWidth
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginTop: '1.5rem',
                                }}
                            >
                                <Button variant="outlined" color="error" onClick={handleClose}>
                                    İptal
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleSave2}>
                                    Kaydet
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </Box>


            </Box>
        </Box>
    );
}

export default FootballCourtManagement;
