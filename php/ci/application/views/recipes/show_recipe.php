<h2><?= $recipe->title ?></h2>
<label>Description</label>
<?= $recipe->description ?>
<br/>
<label>Instructions</label>
<?= $recipe->instructions ?>
<br/>
<label>Source</label>
<?= $recipe->source ?>
<br/>
<label>Serves</label>
<?= $recipe->serves ?>
<br/>
<label>Tags</label>
<ul>
<? foreach($recipe->tag->get() as $tag): ?>
  <li><?= $tag->name ?></li>
<? endforeach; ?>
</ul>

