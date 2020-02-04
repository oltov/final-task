<template>
    <section class="museum">
        <h2 class="title-section title-section--museum">музеи</h2>
        <div class="museum__map">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A6d0232b01a1be3d792f16a9257612b9abf9d6261c3b47d98e1a2751da2b65e4f&amp;source=constructor"
                width="1200"
                height="514"
            ></iframe>
        </div>
        <Contacts />
    </section>
</template>

<script>
import Contacts from "@/components/museums/contacts";

export default {
    components: {
        Contacts
    }
};
</script>
