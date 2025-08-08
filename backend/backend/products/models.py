from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200, help_text="Product name")
    description = models.TextField(help_text="Product description")
    cost = models.DecimalField(max_digits=10, decimal_places=2, help_text="Product cost")
    action = models.CharField(max_length=50, help_text="Action associated with the product")

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = 'Product'
        verbose_name_plural = 'Products'