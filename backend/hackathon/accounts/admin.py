from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
from django.contrib.auth import get_user_model

User = get_user_model()

class MentorProfileInline(admin.StackedInline):
    model = MentorProfile

class EntrepreneurProfileInline(admin.StackedInline):
    model = EntrepreneurProfile

# Register your models here.
class UserAdmin(UserAdmin):
    model = User
    list_display = ['email', 'name', 'dob', 'twitter', 'linkedin', 'interests','about', 'profile_pic', 'is_staff','is_active','is_entrepreneur','is_mentor']
    list_filter = ['email', 'name', 'dob', 'twitter', 'linkedin', 'interests','about', 'profile_pic', 'is_staff','is_active','is_entrepreneur','is_mentor']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name','dob', 'twitter', 'linkedin', 'interests','about', 'profile_pic',)}),
        ('Permissions', {'fields': ('is_active','is_staff','is_entrepreneur','is_mentor','is_superuser')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide,'),
            'fields': ('email', 'password1', 'password2', 'name', 'dob', 'twitter', 'linkedin', 
            'interests','about', 'profile_pic', 'is_staff','is_active','is_entrepreneur','is_mentor'),
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

    inlines = [
        MentorProfileInline,
        EntrepreneurProfileInline
    ]

admin.site.register(User, UserAdmin)
admin.site.register(Startup)
admin.site.register(WorkExperience)
admin.site.register(Education)
admin.site.register(MentorProfile)
admin.site.register(EntrepreneurProfile)
admin.site.register(Mentorship)
admin.site.register(Coins)
admin.site.register(Myrating)
admin.site.register(Prototype)