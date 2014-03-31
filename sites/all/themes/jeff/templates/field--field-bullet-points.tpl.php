<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <a href="/node/<?php print render($variables['element']['#object']->nid); ?>" class="image-overlay">
    <div class="field-items"<?php print $content_attributes; ?>>
      <?php foreach ($items as $delta => $item): ?>
        <div class="field-item <?php print $delta % 2 ? 'odd' : 'even'; ?>"<?php print $item_attributes[$delta]; ?>><?php print render($item); ?></div>
      <?php endforeach; ?>
    </div>
  </a>
</div>
