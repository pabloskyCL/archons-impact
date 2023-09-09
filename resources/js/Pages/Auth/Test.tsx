import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import InputError from '../../Components/InputError';
import PrimaryButton from '../../Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react'
import { PageProps } from '@/types';

export default function Test({ auth, message }: PageProps<{ message?: string }>) {
    return (
        <Authenticated user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">{message}</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}