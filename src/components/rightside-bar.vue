<template>
 <div class = "side-column right">
        ఆదోనిలో ఉన్న GR గార్డెన్‌ని Mr. గుల్ఫరోష్ రహీముల్లా మరియు కుటుంబ సభ్యులు సమర్పించారు. మీ సంతోషకరమైన క్షణాలను మాతో జరుపుకోండి. మీ సౌలభ్యం కోసం అనేక సౌకర్యాలతో అందుబాటులో ఉంది
</div>
</template>

<script>
export default {
    name: 'rightside-bar.vue'
}
</script>

<style>

.side-column.right {
    width: 25%;
    position: absolute;
    top: 0;
    height: 1080px;
    bottom: 200px;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8); /* White background with transparency */
    z-index: 2; /* Ensure sidebar is on top */
    padding: 10px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    align-content: center;
    font-size: 30px;
    text-shadow: 5px 5px 5px grey;

}

</style>
