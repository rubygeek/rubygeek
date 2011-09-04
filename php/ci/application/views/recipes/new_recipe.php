<div id="errors">
<?php echo validation_errors(); ?>
</div>

<h2>Create a recipe</h2>
<form action="<?= site_url('/recipe/create_recipe')?>" method="post">

<label>Title of Recipe</label>
<input type="text" name="recipe[title]" />

<label>Description</label>
<textarea name="recipe[description]"]></textarea>

<label>Instructions</label>
<textarea name="recipe[instructions]"></textarea>

<label>Source</label>
<input type="text" name="recipe[source]" />

<label>Servings</label>
<input type="text" name="recipe[servings]" />

<div><input type="submit" value="Submit" /></div>

</form>