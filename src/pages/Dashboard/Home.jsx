import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../config/supabaseClient'

import { Spin } from 'antd'
import { toast } from 'react-toastify';
import { Modal } from 'antd'
import { formatTimeDay } from '../../utils/formatTimeDay';

const Loader = () => {
    return (
        <div className="h-screen w-full bg-[#06112A] flex items-center justify-center">
            <div className='scale-[2]'><Spin size="large" /></div>
        </div>
    )
}

function Home() {

    const [contacts, setContacts] = useState([]);
    const [contactInfo, setContactInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const openContactModel = (contact) => {
        setContactInfo(contact);
        setIsModalOpen(true);
        showModal(true);
    }

    const fetchContacts = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from("contacts")
                .select("*")
                .order("created_at", { ascending: false }); // latest first

            if (error) throw error;
            setContacts(data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error('Error in fetching data');
        } finally {
            setIsLoading(false);
        }
    };
    // Showing Contacts on Mounted
    useEffect(() => {
        fetchContacts();
    }, [])
    // Deleting contact
    const handleDelete = async contact => {
        const { id } = contact;
        try {
            const { error } = await supabase
                .from('contacts')
                .delete()
                .eq('id', id);
            if (error) throw error;
        } catch (error) {
            console.error('Error deleting contact:', error);
            toast.error('Failed to delete contact');

        } finally {
            toast.success('Contact deleted successfully');
            // Refresh the list
            fetchContacts();
            // Close the modal
            setIsModalOpen(false);
        }
    };

    return (
        <>
            {
                isLoading
                    ? (
                        <Loader />
                    )
                    : (
                        contacts.length === 0
                            ? (
                                <h1 className='pt-6 text-3xl text-center font-bold'>You Have No contacts Yet</h1>
                            )
                            : (
                                <div className='h-screen overflow-x-scroll text-white bg-[#06112A] text-center relative'>
                                    <Link to='/' className='px-4 py-1 text-sm absolute top-5 left-2 hover:text-[#1EE4E9] cursor-pointer'><i className="fa-solid fa-arrow-left"></i></Link>
                                    <h1 className='py-4 text-3xl font-bold'>Contacts</h1>
                                    <table className="w-full mb-4 bg-[#081C29] overflow-auto sm:text-sm text-xs text-center">
                                        <thead className="border-b border-gray-500">
                                            <tr>
                                                <th className="sm:px-4 px-2 py-2">Sr.No</th>
                                                <th className="sm:px-4 px-2 py-2">Name</th>
                                                <th className="sm:px-4 px-2 py-2">Date / Time</th>
                                                <th className="sm:px-4 px-2 py-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contacts.map((contact, idx) => {
                                                return <tr key={idx} className="hover:bg-[#06112A]">
                                                    <td className="sm:px-4 xs:px-2 py-2">{idx + 1}</td>
                                                    <td className="sm:px-4 xs:px-2 py-2">{contact.name}</td>
                                                    <td className="sm:px-4 xs:px-2 py-2">{formatTimeDay(contact.created_at)}</td>
                                                    <td className="sm:px-4 xs:px-2 py-2 text-center">
                                                        <button onClick={() => { openContactModel(contact) }} className="cursor-pointer text-[#1EE4E9] hover:text-[#1ee6e9e3]">Details <i className="fa-solid fa-arrow-right"></i></button>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div >
                            )
                    )
            }
            <Modal okButtonProps={{ style: { backgroundColor: '#1EE4E9' } }} okText='Delete' title="Contact Details" open={isModalOpen} onOk={() => { handleDelete(contactInfo) }} onCancel={handleCancel}>
                <div className='pb-2 flex justify-between items-center'>
                    <h2 className='md:text-base text-sm font-semibold'>Name: <span className='text-sm font-normal text-gray-600'>{contactInfo?.name}</span></h2>
                    <span className='text-xs text-red-600'>{formatTimeDay(contactInfo?.created_at)}</span>
                </div>
                <p className='pb-2 md:text-base text-sm font-semibold'>Email: <span className='text-sm font-normal text-gray-600'>{contactInfo?.email}</span></p>
                <p className='pb-2 md:text-base text-sm font-semibold'>Subject: <span className='text-sm font-normal text-gray-600'>{contactInfo?.subject}</span></p>
                <p className='md:text-base text-sm font-semibold'>Message: <span className='text-sm font-normal text-gray-600'>{contactInfo?.message}</span></p>
            </Modal>
        </>
    )
}

export default Home