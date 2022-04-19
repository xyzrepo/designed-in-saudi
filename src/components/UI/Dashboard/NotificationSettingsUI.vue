<template>
    <div class="pt-8">
        <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Notifications
            </h3>
            <p class="mt-1 text-sm text-gray-500">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
            </p>
        </div>
        <div class="mt-6">
            <fieldset>
                <legend class="text-base font-medium text-gray-900">
                    By Email
                </legend>
                <div class="mt-4 space-y-4">
                    <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                            <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div class="ml-3 text-sm">
                            <label
                                for="comments"
                                class="font-medium text-gray-700">Comments</label>
                            <p class="text-gray-500">
                                Get notified when someones posts a comment on a
                                posting.
                            </p>
                        </div>
                    </div>
                    <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                            <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div class="ml-3 text-sm">
                            <label
                                for="candidates"
                                class="font-medium text-gray-700">Candidates</label>
                            <p class="text-gray-500">
                                Get notified when a candidate applies for a job.
                            </p>
                        </div>
                    </div>
                    <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                            <input
                                id="offers"
                                name="offers"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div class="ml-3 text-sm">
                            <label
                                for="offers"
                                class="font-medium text-gray-700">Offers</label>
                            <p class="text-gray-500">
                                Get notified when a candidate accepts or rejects
                                an offer.
                            </p>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset class="mt-6">
                <div>
                    <legend class="text-base font-medium text-gray-900">
                        Push Notifications
                    </legend>
                    <p class="text-sm text-gray-500">
                        These are delivered via SMS to your mobile phone.
                    </p>
                </div>
                <div class="mt-4 space-y-4">
                    <div class="flex items-center">
                        <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label
                            for="push-everything"
                            class="ml-3 block text-sm font-medium text-gray-700">
                            Everything
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label
                            for="push-email"
                            class="ml-3 block text-sm font-medium text-gray-700">
                            Same as email
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label
                            for="push-nothing"
                            class="ml-3 block text-sm font-medium text-gray-700">
                            No push notifications
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>
