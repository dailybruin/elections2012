from django.db import models

class Story(models.Model):
    STORY_CHOICES = (
        ('op', 'Opinion'),
        ('mm', 'Multimedia'),
        ('ns', 'News'),
    )

    headline = models.CharField(max_length=900)
    teaser = models.TextField()
    pub_date = models.DateTimeField('date published')
    story_type = models.CharField(max_length=2, choices=STORY_CHOICES, default='ns')
    featured = models.BooleanField()
    small_image = models.ImageField(upload_to='electionimg', help_text="Small image is 150x100px", null=True, blank=True)
    large_image = models.ImageField(upload_to='electionimg', help_text="Large image used for features. Size is 600x370px", null=True, blank=True)
    dblink = models.URLField()
    def __unicode__(self):
        return self.headline
