<template>
    <div class="pt-8">
        <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Personal Information
            </h3>
            <p class="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
            </p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
                <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700">
                    First name
                </label>
                <div class="mt-1">
                    <input
                        id="first-name"
                        type="text"
                        name="first-name"
                        autocomplete="given-name"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>

            <div class="sm:col-span-3">
                <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700">
                    Last name
                </label>
                <div class="mt-1">
                    <input
                        id="last-name"
                        type="text"
                        name="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>

            <div class="sm:col-span-4">
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div class="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>

            <div class="sm:col-span-3">
                <label
                    for="country"
                    class="block text-sm font-medium text-gray-700">
                    Country
                </label>
                <div class="mt-1">
                    <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
            </div>

            <div class="sm:col-span-6">
                <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700">
                    Street address
                </label>
                <div class="mt-1">
                    <input
                        id="street-address"
                        type="text"
                        name="street-address"
                        autocomplete="street-address"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label
                    for="city"
                    class="block text-sm font-medium text-gray-700">
                    City
                </label>
                <div class="mt-1">
                    <input
                        id="city"
                        type="text"
                        name="city"
                        autocomplete="address-level2"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label
                    for="region"
                    class="block text-sm font-medium text-gray-700">
                    State / Province
                </label>
                <div class="mt-1">
                    <input
                        id="region"
                        type="text"
                        name="region"
                        autocomplete="address-level1"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label
                    for="postal-code"
                    class="block text-sm font-medium text-gray-700">
                    ZIP / Postal code
                </label>
                <div class="mt-1">
                    <input
                        id="postal-code"
                        type="text"
                        name="postal-code"
                        autocomplete="postal-code"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>
        </div>
    </div>
</template>
